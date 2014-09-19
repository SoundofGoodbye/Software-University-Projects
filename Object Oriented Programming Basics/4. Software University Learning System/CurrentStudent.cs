using System;

namespace SULS
{
    class CurrentStudent : Student
    {
        protected String currentCourse;

        public CurrentStudent(String firstName, String lastName, int age, String studentNumber) : base(firstName, lastName, age, studentNumber) { }

        public String Course
        {
            get { return currentCourse; }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Course cannot be null or empty.");
                }
                else
                {
                    this.currentCourse = value;
                }
            }
        }
    }
}