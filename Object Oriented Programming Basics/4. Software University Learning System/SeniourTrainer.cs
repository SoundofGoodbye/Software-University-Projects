using System;

namespace SULS
{
    class SeniorTrainer : Trainer
    {

        public SeniorTrainer(String firstName, String lastName, int age) : base(firstName, lastName, age) { }

        public void DeleteCourse(String courseName)
        {
            Console.WriteLine("Course: {0} has been deleted.", courseName);
        }
    }
}
