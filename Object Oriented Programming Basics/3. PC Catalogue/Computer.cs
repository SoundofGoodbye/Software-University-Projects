using System;
using System.Collections.Generic;
using System.Text;

class Computer
{
    private String name;

    private String details;

    private decimal price;

    private List<Component> componentsList;

    public Computer(String name, String details, decimal price, List<Component> componentsList)
    {
        this.name = name;
        this.details = details;
        this.price = price;
        this.componentsList = componentsList;
    }

    public String Name
    {
        get { return name; }
        set
        {
            if (String.IsNullOrEmpty(value))
            {
                throw new ArgumentException("Computer Name cannot be null or empty.");
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
                throw new ArgumentException("Computer Details cannot be null and there must be a minimum of five characters.");
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
                throw new ArgumentException("Computer Price must be positive.");
            }
        }
    }

    public List<Component> Components
    {
        get { return componentsList; }

        set { this.componentsList = value; }
    }


    public override string ToString()
    {
        decimal totalPrice = 0;

        StringBuilder strBuilder = new StringBuilder("Computer Name: " + name + Environment.NewLine);
        strBuilder.Append("Components:" + Environment.NewLine);
        foreach (Component currentComponent in componentsList)
        {
            strBuilder.Append("Name: " + currentComponent.Name + Environment.NewLine);
            strBuilder.Append(string.Format("Price: {0:C} {1}", currentComponent.Price,Environment.NewLine));
            totalPrice += currentComponent.Price;
        }

        strBuilder.Append(string.Format("Total Price: {0:C}", totalPrice));

        return strBuilder.ToString();
    }
}
