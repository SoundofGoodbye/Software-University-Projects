using System;
using System.Linq;
using System.Text;

namespace _3.Generic_List
{
    /// <summary>
    /// Generic list that accepts objects of every type. It resizes whenever the capacity of the list is not enough to add another object.
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class GenericList<T> where T : IComparable<T>
    {
        private const int DEFAULT_CAPACITY = 16;

        private T[] data;

        private int currentCapacity;

        private int index;

        public GenericList()
        {
            Capacity = DEFAULT_CAPACITY;
            Index = 0;
            Data = new T[Capacity];
        }

        /// <summary>
        /// Constructor for creating a new GenericList. This constructor first calls the default constructor.
        /// </summary>
        /// <param name="capacity">An optional parameter for the capacity. The default capacity value = 16</param>
        public GenericList(int capacity) : this()
        {
            Capacity = capacity;
            Data = new T[Capacity];
        }

        private T[] Data
        {
            get { return data; }
            set { data = value; }
        }

        private int Index
        {
            get { return index; }
            set
            {
                if (value < 0)
                {
                    throw new IndexOutOfRangeException("Index cannot be less then zero.");
                }
                else
                {
                    index = value;
                }
            }
        }

        private int Capacity
        {
            get { return currentCapacity; }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Capacity cannot be negative.");
                }
                else
                {
                    currentCapacity = value;
                }
            }
        }

        /// <summary>
        /// Add an element to the list. If the list size is exceeded it will dynamically grow (previous size * 2).
        /// </summary>
        /// <param name="obj">The object to add in the list.</param>
        public void Add(T obj)
        {
            if (Index >= Capacity)
            {
                ResizeArray();
            }

            data[Index] = obj;
            Index++;
        }

        /// <summary>
        /// Get the element at the specified position.
        /// Throws @<see cref="ArgumentOutOfRangeException"/> if the passed index is out of range (lower than zero or higher than arrays current range).
        /// </summary>
        /// <param name="atPosition">The position at which to return an element.</param>
        /// <returns>The element at the specified position.</returns>
        public T GetElement(int atPosition)
        {
            if (atPosition > Index)
            {
                throw new ArgumentOutOfRangeException("Passed index: "+ atPosition + ", exceeds list size.");
            } else if (atPosition < 0)
            {
                throw new ArgumentOutOfRangeException("Passed index: " + atPosition + ", is not valid.");
            }
            else
            {
                return data[atPosition];
            }
        }

        /// <summary>
        /// Remove the element at the specified position.
        /// Throws  @<see cref="ArgumentOutOfRangeException"/> if the passed index is out of range (lower than zero or higher than arrays current range).
        /// </summary>
        /// <param name="atPosition">The position at which to remove the element.</param>
        public void RemoveElement(int atPosition)
        {
            if (atPosition > Index)
            {
                throw new ArgumentOutOfRangeException("Passed index: " + atPosition + ", exceeds list size.");
            }
            else if (atPosition < 0)
            {
                throw new ArgumentOutOfRangeException("Passed index: " + atPosition + ", is not valid.");
            }
            else
            {
                data = data.Where((source, currentIndex) => currentIndex != atPosition).ToArray();
            }
        }

        /// <summary>
        /// Insert a new element in the specified position. The list is resized if needed.
        /// The element that was previously at the specified position will be pushed on the next position, also pushing all other elements
        /// one position.
        /// </summary>
        /// <param name="elementToInsert">The element to insert.</param>
        /// <param name="atPosition">The position at which to insert the element.</param>
        public void InsertElement(T elementToInsert, int atPosition)
        {
            Index++;
            if (Index >= Capacity)
            {
                ResizeArray();
            }

            T[] newArr = new T[Capacity];
            bool isNewElementInserted = false;
            int counter = 0;
            for (int i = 0; i < Index; i++)
            {
                if (!isNewElementInserted)
                {
                    if (i == atPosition)
                    {
                        newArr[counter] = elementToInsert;
                        isNewElementInserted = true;
                        counter++;
                    }
                }

                newArr[counter] = data[i];
                counter++;
            }
            Data = newArr;
        }

        /// <summary>
        /// Reset the lists capacity to the default one (16) and remove all elements from the list.
        /// </summary>
        public void Clear()
        {
            Capacity = DEFAULT_CAPACITY;
            T[] newArr = new T[Capacity];
            Data = newArr;
        }

        /// <summary>
        /// Returns the index that the specified element is at or -1 if no such element was found.
        /// </summary>
        /// <param name="element"></param>
        /// <returns></returns>
        public int Find<T>(T element)
        {
            for (int i = 0; i < Index; i++)
            {
                if (data[i].Equals(element))
                {
                    return i;
                }
            }
            return -1;
        }

        private void ResizeArray()
        {
            Capacity *= 2;

            T[] newArr =new T[Capacity];

            for (int i = 0;i < Index; i++ )
            {
                newArr[i] = data[i];
            }

            Data = newArr;
        }

        public override string ToString()
        {
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < Index; i++)
            {
                builder.AppendLine(i + ": " + data[i]);
            }
            return builder.ToString();
        }

        public bool Contains(T element)
        {
            bool doesContain = false;

            for (int i = 0; i < Index; i++)
            {
                if (element.Equals(data[i]))
                {
                    doesContain = true;
                    break;
                }
            }

            return doesContain;
        }

        public T Max()
        {
            if (Index < 1)
            {
                throw new InvalidOperationException("The list is empty");
            }

            T max = data[0];
            for (int i = 1; i < Index; i++)
            {
                if (data[i].CompareTo(max) > 0)
                {
                    max = data[i];
                }
            }
            return max;
        }

        public T Min()
        {
            if (Index < 1)
            {
                throw new InvalidOperationException("The list is empty");
            }

            T min = this.data[0];
            for (int i = 1; i < Index; i++)
            {
                if (this.data[i].CompareTo(min) < 0)
                {
                    min = data[i];
                }
            }
            return min;
        }
    }
}
