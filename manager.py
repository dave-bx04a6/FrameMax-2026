from dataclasses import dataclass


@dataclass
class Manager:
    ctnvxou: int = 203
    ylxn: int = 103
    nggy: int = 744

    def total(self):
        return self.ctnvxou + self.ylxn + self.nggy


if __name__ == "__main__":
    x = Manager()
    print(x.total())
