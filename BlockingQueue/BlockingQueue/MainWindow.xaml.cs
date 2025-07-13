using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Threading;

namespace BlockingQueue
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        BlockingQueue<string> _BlockingQueue = new BlockingQueue<string>(10);
        public MainWindow()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            Thread thread = new Thread(new ThreadStart(ThreadPut));
            thread.Start();

            Thread thread2 = new Thread(new ThreadStart(ThreadGet));
            thread2.Start();


        }

        private void ThreadPut()
        {
            for (int i = 0; i < 20; i++)
            {
                Thread.Sleep(200);
                _BlockingQueue.Enqueue(i.ToString());
            }
           // throw new NotImplementedException();
        }

        private void ThreadGet()
        {
            for (int i = 0; i < 20; i++)
            {
                //Thread.Sleep(1000);
                System.Console.WriteLine(_BlockingQueue.Dequeue());
            }
           // throw new NotImplementedException();
        }
    }
}
