using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Paths
{
    public class Point3D
    {

        private static readonly Point3D StartingPoint = new Point3D(0, 0, 0);

        private int X;

        private int Y;

        private int Z;


        static Point3D()
        {
            StartingPoint = new Point3D(0, 0, 0);
        }

        public Point3D()
        {

        }

        public Point3D(int x, int y, int z)
        {
            this.PointX = x;
            this.PointY = y;
            this.PointZ = z;
        }

        public Point3D(int x, int y)
        {
            this.PointX = x;
            this.PointY = y;
        }

        public static Point3D StartPoint
        {
            get { return StartPoint; }

            private set { ;}
        }

        public int PointX
        {
            get { return X; }

            set { this.X = value; }
        }

        public int PointY
        {
            get { return Y; }

            set { this.Y = value; }
        }

        public int PointZ
        {
            get { return Z; }

            set { this.Z = value; }
        }

        public override string ToString()
        {
            return string.Format("PointX : {0}, PointY: {1}, PointZ: {2}", PointX, PointY, PointZ);
        }
    }
}
