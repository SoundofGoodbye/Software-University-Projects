using System;
using System.Collections.Generic;

class ProgramMain
{
    static void Main()
    {
        Computer firstComp = new Computer("Computer Name", "This is a computer description", 195M, new List<Component>());

        Component motherBoard = new Component("MotherBoard Name", "This is a motherboard", 150M);
        firstComp.Components.Add(motherBoard);

        Component processor = new Component("Processor Name", "This is a processor", 190M);
        firstComp.Components.Add(processor);

        Component graphicsCard = new Component("Graphics Card Name", "This is a graphics card", 250M);
        firstComp.Components.Add(graphicsCard);

        //Create second computer.
        Computer secondComp = new Computer("Second comp", "This is the second Computer", 20M, new List<Component>());

        Component secondMotherBoard = new Component("MotherBoard Name - 2", "This is a motherboard - 2", 110M);
        secondComp.Components.Add(secondMotherBoard);

        Component secondProcessor = new Component("Processor Name - 2", "This is a Processor - 2", 80M);
        secondComp.Components.Add(secondProcessor);

        Component secondGraphicsCard = new Component("Graphics Card Name - 2", "This is a graphics card - 2", 50M);
        secondComp.Components.Add(secondGraphicsCard);

        List<Computer> compList = new List<Computer>();

        compList.Add(firstComp);
        compList.Add(secondComp);

        compList.Sort();
        foreach (Computer currentComp in compList)
        {
            Console.WriteLine(currentComp.ToString());
            Console.WriteLine();
        }
    }
}
