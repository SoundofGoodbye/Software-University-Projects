using System;
namespace SULS
{
    class OnsiteStudent : CurrentStudent
    {
        private int numVisits;

        public OnsiteStudent(String firstName, String lastName, int age, String studentNumber, float averageGrade)
            : base(firstName, lastName, age, studentNumber)
        {
            this.AverageGrade = averageGrade;
        }

        public int NumVisits
        {
            get { return numVisits; }

            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Number of visits cannot be a negative number.");
                }
                else
                {
                    this.numVisits = value;
                }
            }
        }
    }
}