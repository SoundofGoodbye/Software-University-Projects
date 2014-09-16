using System;
class Persons
{
    private String name;

    private int age;

    private String email;

    public Persons(String name, int age, String email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public Persons(String name, int age) : this(name, age, null) { }

    public String Name
    {
        get { return name; }

        set
        {
            if (String.IsNullOrEmpty(name))
            {
                throw new ArgumentException("Name cannot be an empty string or null.");
            }
            else
            {
                this.name = value;
            }
        }
    }

    public int Age
    {
        get { return age; }

        set
        {
            bool isValidAge = value > 1 || value < 100;

            if (isValidAge)
            {
                this.age = value;
            }
            else
            {
                throw new ArgumentException("Age must be between 1 and 100");

            }
        }
    }

    public String Email
    {
        get { return email; }

        set
        {
            if (value.Equals(""))
            {
                throw new ArgumentException("Email cannot be empty string.");
            }
            else
            {
                this.email = value;
            }
        }
    }

    public override string ToString()
    {
        return string.Format("Name: {0}, Age: {1}, Email: {2}", name, age, email);
    }
}
