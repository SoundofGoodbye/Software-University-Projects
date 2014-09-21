using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.Static_Members_and_Namespaces_Homework
{
    public static class DistanceCalculator
    {
        private Point3D FirstPoint;

        private Point3D SecondPoint;

        public Point3D First
        {
            get { return FirstPoint; }

            set { this.FirstPoint = value; }
        }

        public Point3D Second
        {
            get { return SecondPoint; }

            set { this.SecondPoint = value; }
        }

        public static double CalculateDistance(Point3D from, Point3D to)
        {
            double resultDistance = Math.Sqrt(Math.Pow(from.PointX - to.PointX, 2) + Math.Pow(from.PointY - to.PointY, 2) + Math.Pow(from.PointZ - to.PointZ, 2));

            return resultDistance;
        }
    }
}
