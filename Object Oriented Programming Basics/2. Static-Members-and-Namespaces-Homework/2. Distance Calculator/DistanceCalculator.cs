using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paths
{
    public static class DistanceCalculator
    {
        public static double CalculateDistance(Point3D from, Point3D to)
        {
            double resultDistance = Math.Sqrt(Math.Pow(from.PointX - to.PointX, 2) + Math.Pow(from.PointY - to.PointY, 2) + Math.Pow(from.PointZ - to.PointZ, 2));

            return resultDistance;
        }
    }
}
