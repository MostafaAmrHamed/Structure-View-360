type pinInfo = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

export const layerOneInfo: pinInfo[] = [
  {
    id: 0,
    title: "Walk-in Closet",
    description: `A walk-in closet is a spacious and typically separate storage area within a home, specifically designed for organizing and storing clothing, shoes, accessories, and sometimes even other personal items. Unlike standard closets, walk-in closets are large enough for individuals to physically enter, providing a dedicated and accessible space for dressing and selecting outfits.
    Key features of a walk-in closet often include ample shelving, hanging rods, drawers, and storage compartments. The design can vary widely based on personal preferences and available space, with options for customization such as built-in shoe racks, mirrors, seating areas, and even integrated lighting to enhance visibility. Walk-in closets are often considered a luxurious and desirable feature in residential spaces, providing an organized and aesthetically pleasing environment for storing and managing one's wardrobe. They offer convenience and efficiency in daily routines, allowing individuals to easily locate and access their clothing and accessories.`,
    image: "WalkinCloset",
  },
  {
    id: 1,
    title: "Bedroom",
    description: `
    A bedroom is a private and personal space within a home dedicated to rest, relaxation, and rejuvenation. It serves as an intimate retreat where individuals can unwind, sleep, and engage in personal activities. Bedrooms are designed to provide comfort and a sense of personal style, reflecting the preferences and personality of the occupant.

    Key features of a bedroom typically include a bed, which serves as the focal point and main piece of furniture, along with additional elements such as nightstands, dressers, and wardrobes for storage. The design of a bedroom often incorporates elements that contribute to a calming and tranquil atmosphere, such as soothing color schemes, soft lighting, and comfortable bedding.

    Bedrooms are versatile spaces that go beyond mere sleeping quarters; they can also serve as a private sanctuary for activities like reading, meditation, or watching television. Personalization through decor, artwork, and furnishings is common, allowing individuals to create a space that promotes both relaxation and self-expression.

    Overall, a well-designed bedroom provides a haven for individuals to escape the demands of daily life, promoting a restful environment conducive to a good night's sleep and a sense of overall well-being.`,
    image: "Bedroom",
  },
];
