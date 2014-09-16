using System;

class Component
{
    private String name;

    private String details;

    private decimal price;

    public Component(String name, String details, decimal price)
    {
        this.name = name;
        this.details = details;
        this.price = price;
    }

    public Component(String name, String details) : this(name, details, 0) { }

    public String Name
    {
        get { return name; }
        set
        {
            if (String.IsNullOrEmpty(value))
            {
                throw new ArgumentException("Component Name cannot be null or empty.");
            }
            else
            {
                this.name = value;
            }
        }
    }

    public String Details
    {
        get { return details; }

        set
        {
            bool isValidDetails = String.IsNullOrEmpty(value) || value.Length > 5;
            if (isValidDetails)
            {
                this.details = value;
            }
            else
            {
                throw new ArgumentException("Component Details cannot be null and there must be a minimum of five characters.");
            }
        }
    }

    public decimal Price
    {
        get { return price; }

        set
        {
            bool isValidPrice = value >= 0;
            if (isValidPrice)
            {
                this.price = value;
            }
            else
            {
                throw new ArgumentException("Component Price must be positive.");
            }
        }
    }
}
