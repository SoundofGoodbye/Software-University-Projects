using System;
namespace SULS
{
    public abstract class Person
    {
        protected String firstName;

        protected String lastName;

        protected int age;


        public Person(String firstName, String lastName, int age)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        protected String FirstName
        {
            get { return firstName; }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("First name cannot be empty or null");
                }
                else
                {
                    this.firstName = value;
                }
            }
        }

        protected String LastName
        {
            get { return lastName; }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Last name cannot be empty or null");
                }
                else
                {
                    this.lastName = value;
                }
            }
        }

        protected int Age
        {
            get { return age; }

            set
        {
            if (value < 0)
            {
                throw new ArgumentException("Age cannot be a negative number.")
            } else {
                age = value;
            }
        }
        }
    }
}