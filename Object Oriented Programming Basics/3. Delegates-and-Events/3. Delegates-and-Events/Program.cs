using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace _3.Delegates_and_Events
{
    public class Program
    {
        private const int YEARLY_INTEREST_COMPAUND = 12;

        static void Main(string[] args)
        {
            InterestCalculator intCalcCompound = new InterestCalculator(2500m, 7.2, 15, GetSimpleInterest);
            Console.WriteLine("{0:0.0000}", intCalcCompound.Result);

            InterestCalculator intCalcSimple = new InterestCalculator(500m, 5.6, 10, GetCompoundInterest);
            Console.WriteLine("{0:0.0000}", intCalcSimple.Result);
        }

        public static decimal GetSimpleInterest(decimal sumMoney, double interest, int years)
        {
            decimal simpleInterest = sumMoney * (decimal) (1 + interest * years);
            return simpleInterest;
        }

        public static decimal GetCompoundInterest(decimal sumMoney, double interest, int years)
        {
            var power = YEARLY_INTEREST_COMPAUND * years;

            decimal compoundInterest = sumMoney* (decimal) Math.Pow((1 + interest/YEARLY_INTEREST_COMPAUND), power);

            return compoundInterest;
        }
    }
}
