using System;
using System.Collections.Generic;
namespace SULS
{
    class GraduateStudent : Student
    {
        public GraduateStudent(String firstName, String lastName, int age, String studentNumber, float averageGrade)
            : base(firstName, lastName, age, studentNumber)
        {
            this.AverageGrade = averageGrade;
        }
    }
}