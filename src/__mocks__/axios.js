const mockResponse = {
  data: {
    results: [
      {
        gender: "female",
        name: {
          title: "Mrs",
          first: "Julia",
          last: "Jacobs",
        },
        location: {
          street: {
            number: 9009,
            name: "Washington Ave",
          },
          city: "Sydney",
          state: "New South Wales",
          country: "Australia",
          postcode: 1698,
          coordinates: {
            latitude: "-84.7732",
            longitude: "49.6035",
          },
          timezone: {
            offset: "+11:00",
            description: "Magadan, Solomon Islands, New Caledonia",
          },
        },
        email: "julia.jacobs@example.com",
        login: {
          uuid: "778fefc3-015b-40f0-886b-f172543c0e84",
          username: "sadzebra173",
          password: "gotham",
          salt: "gvRb0csI",
          md5: "c7237774a727a904f6fa52bcd9a7700c",
          sha1: "6735068936a74f458618a958ddae52f58fd06a55",
          sha256:
            "d654c72af6537d4a2b3ff5be943a5a8c570b6bc3e7a609934f8cd9093d5d76bd",
        },
        dob: {
          date: "1971-04-21T12:38:50.307Z",
          age: 50,
        },
        registered: {
          date: "2005-01-27T09:23:23.106Z",
          age: 16,
        },
        phone: "03-1709-5339",
        cell: "0494-117-037",
        id: {
          name: "TFN",
          value: "963295957",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/31.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
        },
        nat: "AU",
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
