using System;

namespace _3.Delegates_and_Events
{
    class InterestCalculator
    {
        private decimal money;

        private double interest;

        private int years;

        private decimal result;

        public InterestCalculator(decimal money, double interest, int years, CalculateInterest del)
        {
            this.Money = money;
            this.Interest = interest;
            this.Years = years;

           this.Result =  del(money, interest, years);
        }

        public delegate decimal CalculateInterest(decimal moneySum, double interest, int years);

        public decimal Money
        {
            get { return this.money; }
            set { this.money = value; }
        }

        public double Interest
        {
            get
            {
                return this.interest;
            }

            set
            {
                if (value < 0)
                {
                    throw new FormatException("Interest can't be negative!");
                }
                else
                {
                    this.interest = value;   
                }
            }
        }

        public int Years
        {
            get
            {
                return this.years;
            }

            set
            {
                if (value < 0)
                {
                    throw new FormatException("Invalid input. Period can't be negative.");
                }
                else
                {
                    this.years = value;   
                }
            }
        }

        public decimal Result
        {
            get { return this.result; }
            private set { this.result = value; }
        }
    }
}
