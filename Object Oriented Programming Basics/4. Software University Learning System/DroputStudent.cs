using System;

namespace SULS
{
    class DropoutStudent : Student
    {
        private String dropoutReason;

        public DropoutStudent(String firstName, String lastName, String studentNumber, float averageGrade, int age, String dropoutReason)
            : base(firstName, lastName, studentNumber, averageGrade, age)
        {
            this.Reason = dropoutReason;
        }
        public String Reason
        {
            get { return dropoutReason; }

            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Reason cannot be null or empty");
                }
                else
                {
                    this.dropoutReason = value;
                }
            }
        }

        public void Reapply()
        {
            Console.WriteLine("Firstname: {0}, Lastname {1}, Age: {2}, Student number: {3}, Average grade: {4}, Dropout reason: {5}",
                this.FirstName, this.LastName, this.Age, this.AverageGrade, this.Reason);
        }
    }
}