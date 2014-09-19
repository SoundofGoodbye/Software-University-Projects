using System;

namespace SULS
{
    public abstract class Trainer : Person
    {
        public Trainer(String firstName, String lastName, int age) : base(firstName, lastName, age) { }

        protected void CreateCourse(String courseName)
        {
            Console.WriteLine("Course: {0} has been created.", courseName);
        }
    }
}
