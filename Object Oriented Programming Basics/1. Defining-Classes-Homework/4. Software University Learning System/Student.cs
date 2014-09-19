using System;
namespace SULS
{
    public abstract class Student : Person
    {
        protected String studentNumber;

        private float averageGrade;

        public Student(String firstName, String lastName, int age, String studentNumber)
            : base(firstName, lastName, age)
        {
            this.studentNumber = studentNumber;
        }

        public Student(string fName, string lName, string studentNumber, float averageGrade, int age)
            : this(fName, lName, age, studentNumber)
        {
            this.AverageGrade = averageGrade;
        }

        protected String StudentNumber
        {
            get { return studentNumber; }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Student number cannot be null or empty.");
                }
                else
                {
                    this.studentNumber = value;
                }
            }
        }

        public float AverageGrade
        {
            get { return averageGrade; }

            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Average grade cannot be negative number.");
                }
                else
                {
                    this.averageGrade = value;
                }
            }
        }
    }
}