using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace _2.Fraction_Calculator
{
    class Program
    {
        public struct Fraction
        {
            private double numerator;

            private double denominator;

            public Fraction(double numerator, double denominator)
                : this()
            {
                Numerator = numerator;
                Denominator = denominator;
            }

            public double Numerator
            {
                get { return numerator; }
                private set
                {
                    if (value < int.MinValue || value > int.MaxValue)
                    {
                        throw new ArgumentOutOfRangeException("Nominator is out of range.");
                    }
                    else
                    {
                        numerator = value;
                    }
                }
            }

            public double Denominator
            {
                get { return denominator; }
                private set
                {
                    if (value == 0)
                    {
                        throw new ArgumentException("Denominator cannot be 0");
                    }
                    else if (value < int.MinValue || value > int.MaxValue)
                    {
                        throw new ArgumentOutOfRangeException("Denominator out of range.");
                    }
                    else
                    {
                        denominator = value;    
                    }
                }
            }

            public static Fraction operator +(Fraction firstFraction, Fraction secondFraction)
            {
                double newNumerator = (firstFraction.Numerator * secondFraction.Denominator) + (secondFraction.Numerator * firstFraction.Denominator);
                double newDenominator = firstFraction.Denominator * secondFraction.Denominator;

                return new Fraction(newNumerator, newDenominator);
            }

            public static Fraction operator -(Fraction firstFraction, Fraction secondFraction)
            {
                double newNumerator = (firstFraction.Numerator * secondFraction.Denominator) - (secondFraction.Numerator * firstFraction.Denominator);
                double newDenominator = firstFraction.Denominator * secondFraction.Denominator;

                return new Fraction(newNumerator, newDenominator);
            }

            public override string ToString()
            {
                double result = (Numerator / Denominator);
                return string.Format("{0:R}", result);
            }
        }

        static void Main(string[] args)
        {
            var fraction1 = new Fraction(24, 7);
            var fraction2 = new Fraction(238, 4);
            var result = fraction1 + fraction2;
            Console.WriteLine(result.Numerator);
            Console.WriteLine(result.Denominator);
            Console.WriteLine(result);
        }
    }
}
