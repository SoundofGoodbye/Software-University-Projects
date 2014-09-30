using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Asynchronous_Timer
{
    class Program
    {
        static void Main(string[] args)
        {
            Action action = DummyMethod;
            AsynchronousTimer timer = new AsynchronousTimer(action, 5, 2000);
            timer.ExecuteMethod();

            int counter = 0;
            while (counter < 10)
            {
                Console.WriteLine("Im running on the main thread.");
                counter ++;
            }
        }

        public static void DummyMethod()
        {
            Console.WriteLine("I am a dummy method called from another thread.");
        }
    }
}
