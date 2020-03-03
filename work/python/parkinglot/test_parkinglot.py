import unittest
import parkinglot as pkl

class TestParkingSpot(unittest.TestCase):
    def test_parkingVehicle(self):
        parkingSpot = pkl.ParkingSpot(pkl.Vehicle.Size.MOTOR_CYCLE)
        car = pkl.Car(pkl.VehicleSize.MOTOR_CYCLE)
        parkingSpot.parkVehicle(car)

        self.assertEqual(car, parkingSpot.getVehicle())

if __name__ == '__main__':
    unittest.main()