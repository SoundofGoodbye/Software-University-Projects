using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace SULS
{
    class SULSTest
    {
        static void Main()
        {
            Trainer mitko = new JuniorTrainer("Mitko", "Mitkov", 20);
            Trainer vlado = new SeniorTrainer("Vlado", "Vladov", 25);
            Trainer svetlin = new SeniorTrainer("Svetlin", "Svetlinov", 45);
            Trainer atanas = new JuniorTrainer("Atanas", "Atanasov", 18);

            Student toi = new GraduateStudent("Zavyrshil", "Student", 50, "80002341", (float)5.46);
            Student blagoi = new GraduateStudent("ZavurshilIToi", "StudentIToi", 15, "80003264", (float)3.35);
            Student misho = new GraduateStudent("PakZavurshil", "StudentPak", 25, "80015517", (float)6.00);


            Student pesho = new DropoutStudent("Pesho", "Peshev", "40001234", (float)2.33, 20, "low result");
            Student georgi = new DropoutStudent("Georgi", "Georgiev", "40009080", (float)5.33, 35, "family reasons");

            CurrentStudent onlineOne = new OnlineStudent("Online", "OnStudent", 60, "61006161", (float)3.45);
            CurrentStudent onlineTwo = new OnlineStudent("OnlineTwo", "TwoStudent", 28, "51005151", (float)4.75);
            CurrentStudent niki = new OnsiteStudent("Niki", "Nikolaev", 27, "50009841", (float)5.85);

            List<Person> persons = new List<Person>() { mitko, vlado, svetlin, atanas, toi, blagoi, misho, pesho, georgi, onlineOne, onlineTwo, niki };

            persons.Where(p => p is CurrentStudent).OrderBy(p => ((Student)p).AverageGrade).ToList().ForEach(p => Console.WriteLine(p.ToString()));

        }
    }
}
