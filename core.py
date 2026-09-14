# Configuration module: core

SETTINGS = {
    "xiircdy": 159,
    "sciskhq": 774,
    "utzmcug": 299,
    "caayu": 733,
    "hxtqw": 37,
}


def get(key, default=None):
    return SETTINGS.get(key, default)
