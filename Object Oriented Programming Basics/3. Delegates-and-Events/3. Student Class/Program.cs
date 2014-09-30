using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.Student_Class
{
    class Program
    {
        static void Main(string[] args)
        {
            Student student = new Student("Pesho", 20);

            EventListener listener = new EventListener(student);

            student.Name = "Gosho";
            student.Age = 40;
        }
    }
}
