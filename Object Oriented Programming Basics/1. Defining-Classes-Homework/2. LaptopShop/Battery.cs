using System;

class Battery
{
    private String battery;

    private int batteryLife;

    //Default Consturctor
    public Battery()
    {
        this.battery = "Default Battery Name";
        this.batteryLife = 0;
    }

    public Battery(String battery)
    {
        this.battery = battery;
    }

    public Battery(int batteryLife)
    {
        this.battery = "Default Battery Name";
        this.batteryLife = batteryLife;
    }

    public Battery(String battery, int batteryLife)
    {
        this.battery = battery;
        this.batteryLife = batteryLife;
    }

    public String BatteryName
    {
        get { return battery; }

        set
        {
            if (String.IsNullOrEmpty(value))
            {
                throw new ArgumentNullException();
            }
            else
            {
                this.battery = value;
            }
        }
    }

    public int BatteryLife
    {
        get { return batteryLife; }

        set
        {
            if (value < 0)
            {
                throw new ArgumentException();
            }
            else
            {
                this.batteryLife = value;
            }
        }
    }

    public override string ToString()
    {
        return string.Format("Battery Name: {0}, Battery Life Time: {1} hours", this.BatteryName, this.BatteryLife);
    }
}

