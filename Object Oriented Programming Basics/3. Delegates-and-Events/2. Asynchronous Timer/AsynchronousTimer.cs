using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace _2.Asynchronous_Timer
{
    class AsynchronousTimer
    {
        private Action action;

        private int ticks;

        private int timeInterval;

        public AsynchronousTimer(Action methodToCall, int ticks, int timeInterval)
        {
            this.Action = methodToCall;
            this.Ticks = ticks;
            this.TimeInterval = timeInterval;
        }


        public Action Action
        {
            get { return this.action; }
            private set { this.action = value; }
        }

        public int Ticks
        {
            get { return ticks; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Number of times the method should be called cannot be negative number.");
                }
                else
                {
                    this.ticks = value;
                }
            }
        }
        public int TimeInterval
        {
            get { return timeInterval; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Interval between method calls cannot be negative.");
                }
                else
                {
                    this.timeInterval = value;   
                }
            }
        }

        public void ExecuteMethod()
        {
            Thread methodThread = new Thread(() =>
            {
                int counter = 0;

                while (counter < Ticks)
                {
                    // Call the method from the main class.
                    action();
                    // Increment number of ticks
                    counter ++;

                    // Sleep the thread for the specified time.
                    Thread.Sleep(TimeInterval);
                }
            });
            methodThread.Start();
        }
    }
}
