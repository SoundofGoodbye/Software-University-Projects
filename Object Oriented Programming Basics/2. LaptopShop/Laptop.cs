using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1.Defining_Classes_Homework
{
    class Laptop
    {
        private String model;

        private String manufacturer;

        private String processor;

        private String graphicsCard;

        private Battery battery;

        private int screenSize;

        private decimal price;



        //Default constructor
        public Laptop()
        {
            this.model = "Default Model";
            this.manufacturer = "Default Manufacturer";
            this.processor = "Default Processor";
            this.graphicsCard = "Default Graphics Card";
            this.screenSize = 0;
            this.price = 0.0M;
            this.battery = new Battery();
        }


        public Laptop(String model, String manufacturer, String processor, String graphicsCard, Battery battery)
        {
            this.model = model;
            this.manufacturer = manufacturer;
            this.processor = processor;
            this.graphicsCard = graphicsCard;
            this.battery = battery;
        }

        public Laptop(String model, String manufacturer, String processor, String graphicsCard)
        {
            this.model = model;
            this.manufacturer = manufacturer;
            this.processor = processor;
            this.graphicsCard = graphicsCard;
            this.battery = new Battery();
        }

        public Laptop(String model, String manufacturer, String processor, String graphicsCard, int screenSize, decimal price)
        {
            this.model = model;
            this.manufacturer = manufacturer;
            this.processor = processor;
            this.graphicsCard = graphicsCard;
            this.screenSize = screenSize;
            this.price = price;
            this.battery = new Battery();
        }


        public String Model
        {
            get { return model; }

            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Model cannot be null or empty.");
                }
                else
                {
                    this.model = value;
                }
            }
        }

        public String Manufacturer
        {
            get { return manufacturer; }

            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Manufacturer cannot be null or empty.");
                }
                else
                {
                    this.manufacturer = value;
                }
            }
        }

        public String Processor
        {
            get { return processor; }

            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Processor cannot be null or empty.");
                }
                else
                {
                    this.processor = value;
                }
            }
        }

        public String GraphicsCard
        {
            get { return graphicsCard; }

            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Graphics Card cannot be null or empty.");
                }
                else
                {
                    this.graphicsCard = value;
                }
            }
        }

        public Battery LaptopBattery
        {
            get { return this.battery; }
            set
            {
                if (value != null)
                {
                    this.battery = value;
                }
                else
                {
                    throw new ArgumentNullException("Batter cannot be null");
                }
            }
        }

        public int ScreenSize
        {
            get { return screenSize; }

            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("ScreenSize cannot be negative value.");
                }
                else
                {
                    this.screenSize = value;
                }
            }
        }

        public decimal Price
        {
            get { return price; }

            set
            {
                if (value < 0)
                {
                    throw new ArgumentException("Price cannot be negative.");
                }
                else
                {
                    this.price = value;
                }
            }
        }

        public override string ToString()
        {
            return string.Format("Model: {0}, Manufacturer: {1}, Processor: {2}, Graphics Card: {3}, Battery Name: {4}, Battery Life Time: {5}, ScreenSize: {6}, Price: {7}"
                , this.Model, this.Manufacturer, this.Processor, this.GraphicsCard, this.battery.BatteryName,
                this.battery.BatteryLife, this.ScreenSize, this.Price);
        }
    }
}
