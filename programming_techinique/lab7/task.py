from typing import *

class Passenger:
    def __init__(self, name:str, ticket_number:int, start_station:str, end_station:str) -> None:
        self.name = name
        self.ticket_number = ticket_number
        self.start_station = start_station
        self.end_station = end_station

class Station:
    def __init__(self, name:str, passengers: Set[Passenger]) -> None:
        self.name = name
        self.passengers = passengers

    def arrive(self, arriving_passengers: Set[Passenger]) -> None:
        self.passengers = self.passengers.union(arriving_passengers)

    def depart(self, train_station_names: List[str]) -> Set[Passenger]:
        departing_passengers:Set[Passenger] = set()
        for passenger in self.passengers:
            if passenger.end_station in train_station_names:
                departing_passengers.add(passenger)
        self.passengers -= departing_passengers
        return departing_passengers

class Train:
    def __init__(self, identifier:str, stations:List[Station], passengers: Set[Passenger]) -> None:
        self.identifier = identifier
        self.stations = stations
        self.passengers = passengers

    def embark(self, departing_passengers:Set[Passenger]) -> None:
        self.passengers = self.passengers.union(departing_passengers)

    def disembark(self) -> Set[Passenger]:
        disembarking_passengers:Set[Passenger] = set()
        for passenger in self.passengers:
            if passenger.end_station == self.stations[0].name:
                disembarking_passengers.add(passenger)
        self.passengers = self.passengers - disembarking_passengers
        return disembarking_passengers

    def move(self) -> None:
        print(f"Next Station: {self.stations[0].name}")
        self.stop()

    def stop(self) -> None:
        print(f"<<{self.stations[0].name}>>")

        arriving_passengers = self.disembark()
        self.stations[0].arrive(arriving_passengers)

        departing_passengers = self.stations[0].depart(self.get_station_names())
        self.embark(departing_passengers)

        self.stations.pop(0)

        self.print_passengers()

        if len(self.stations) > 0:
            self.move()
        else:
            print("This train terminates here. Please, everyone disembark!")

    def get_station_names(self) -> List[str]:
        station_names = []
        for station in self.stations:
            station_names.append(station.name)
        return station_names
    
    def print_passengers(self) -> None:
        for passenger in self.passengers:
            print(passenger.name)

if __name__ == "__main__":
    p1 = Passenger("Arendt", 1, "Hauptbahnhof", "Universität")
    p2 = Passenger("Nietzsche", 2, "Feuersee", "Universität")
    p3 = Passenger("Marx", 3, "Schwabstraße", "Universität")

    s1 = Station("Hauptbahnhof", {p1})
    s2 = Station("Feuersee", {p2})
    s3 = Station("Schwabstraße", {p3})
    s4 = Station("Universität", set())

    train = Train("S3 - Vaihingen", [s1, s2, s3, s4], set())
    train.move()
