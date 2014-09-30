using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.Student_Class
{
    class EventListener
    {
        private Student student;

        public EventListener(Student student)
        {
            this.Student = student;

            Student.Changed += new PropertyChangedEventHandler(StudentChanged);
        }

        // This will be called whenever student changes.
        private void StudentChanged(object sender, StudentPropertyChangedEventArgs e)
        {
            Console.WriteLine("Property changed: {0} (from {1} to {2})", e.PropertyName, e.OldValue, e.NewValue);
        }


        public void Detach()
        {
            // Detach the event and delete the list
            Student.Changed -= new PropertyChangedEventHandler(StudentChanged);
            Student = null;
        }

        public Student Student
        {
            get { return student; }
            private set { this.student = value; }
        }
    }
}
