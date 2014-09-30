
using System;

namespace _3.Generic_List
{
    class Program
    {
        static void Main()
        {
            // Test create new List
            GenericList<string> list = new GenericList<string>(2);

            // Test Add method.
            list.Add("One");
            list.Add("Two");
            list.Add("Three");
            Console.WriteLine("Testing Add");
            Console.WriteLine(list.ToString());

            var element = list.GetElement(2);
            Console.WriteLine("Testing Get");
            Console.WriteLine("Element at position 2: " + element);
            Console.WriteLine();
            // Test insert position: expected output: One, Four, Two, Three
            list.InsertElement("Four", 1);
            Console.WriteLine("Testing Insert");
            Console.WriteLine(list.ToString());

            // Test remove method.
            list.RemoveElement(1);
            Console.WriteLine("Testing Remove");
            Console.WriteLine(list.ToString());

            // Test find method.
            int index = list.Find("Two");
            Console.WriteLine("Test Find method: Find Two");
            Console.WriteLine(index);


            // Test Contains method
            Console.WriteLine("Test contains method");
            Console.WriteLine("Contains Five: " + list.Contains("Five"));
            Console.WriteLine("Adding Five to the list...");
            list.Add("Five");
            Console.WriteLine("Contains Five: " + list.Contains("Five"));
            Console.WriteLine();


            // Test Clear method
            list.Clear();
            Console.WriteLine(list.ToString());

            var allAttributes = typeof(GenericList<>).GetCustomAttributes(typeof(VersionAttribute), false);
            Console.WriteLine("Version: " + allAttributes[0]);

            // This will throw an exception
               list.GetElement(20);
        }
    }
}
