using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SquareRoot
{
    class SquareRoot
    {
        static void Main()
        {
            string userInput = Console.ReadLine();
            int result = 0;


            try
            {
                bool isParsed = Int32.TryParse(userInput, out result);
                if (isParsed)
                {
                    if (result < 0)
                    {
                        throw new ArgumentException();
                    }
                    else
                    {
                        Console.WriteLine(result);
                    }
                }
                else
                {
                    throw new ArgumentException();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Invalid number");
            }
            finally
            {
                Console.WriteLine("Goodbye");
            }
        }
    }
}
