using System;
namespace SULS
{
    class OnlineStudent : CurrentStudent
    {
        public OnlineStudent(String firstName, String lastName, int age, String studentNumber, float averageGrade)
            : base(firstName, lastName, age, studentNumber)
        {
            this.AverageGrade = averageGrade;
        }
    }
}