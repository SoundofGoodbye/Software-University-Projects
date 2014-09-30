using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3.Student_Class
{
    public delegate void PropertyChangedEventHandler(object sender, StudentPropertyChangedEventArgs e);

    class Student
    {
        private string name;

        private int age;

        public event PropertyChangedEventHandler Changed;

        public Student(string name, int age)
        {
            this.Name = name;
            this.Age = age;
        }

        protected virtual void OnChanged(StudentPropertyChangedEventArgs e)
        {
            if (Changed != null)
            {
                Changed(this, e);
            }
        }

        public String Name
        {
            get { return name; }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Name cannot be empty string or null.");
                }
                else
                {
                    OnChanged(new StudentPropertyChangedEventArgs("Name", Name, value));
                    this.name = value;
                }
            }
        }

        public int Age
        {
            get { return age; }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Age cannot be negative number.");
                }
                else
                {
                    OnChanged(new StudentPropertyChangedEventArgs("Age", Age.ToString(), value.ToString()));
                    this.age = value;
                }
            }
        }
    }
}
