using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Enter_Numbers
{
    class EnterNumbers
    {
        private static void Main()
        {
            int count = 1;
            int x = 1;
            int y = 5;


            while (count <= 10)
            {
                Console.WriteLine("Enter number: {0}", count);
                Console.WriteLine("Enter number between: {0} and {1}", x, y);
                try
                {
                    ReadNumber(x, y);
                    count++;
                    x += 2;
                    y += 5;
                }
                catch (Exception e)
                {
                    Console.WriteLine("Invalid input was entered - enter number again.");
                }
            }
        }

        private static void ReadNumber(int start, int end)
        {
            string userInput = Console.ReadLine();
            int result = 0;

            bool isParsed = Int32.TryParse(userInput, out result);

            if (isParsed)
            {
                if (result < start || result > end)
                {
                    throw new ArgumentException("Input out of range");
                }
                else
                {
                    //Valid input.
                }
            }
            else
            {
                throw new ArgumentException("Ivnalid input. Not a number");
            }
        }
    }
}
