export interface ArtDocument {
  _id: string;
  title: string;
  artName: string;
  preview: string;
  img: string;
  description: string;
  additionalImages: string[];
  dateCreated: string;
  medium: string;
  context: string;
}

export function validatePostRequest(artwork: ArtDocument): {
  valid: boolean;
  errors?: string[];
} {
  const errors: string[] = [];

  if (!artwork.title || typeof artwork.title !== "string") {
    errors.push("Invalid or missing 'title'. It must be a non-empty string.");
  }

  if (!artwork.artName || typeof artwork.artName !== "string") {
    errors.push("Invalid or missing 'artName'. It must be a non-empty string.");
  }

  if (!artwork.medium || typeof artwork.medium !== "string") {
    errors.push("Invalid or missing 'medium'. It must be a non-empty string.");
  }

  if (!artwork.context || typeof artwork.context !== "string") {
    errors.push("Invalid or missing 'context'. It must be a non-empty string.");
  }

  if (!artwork.preview || typeof artwork.preview !== "string") {
    errors.push(
      "Invalid or missing 'previewImgUrl'. It must be a non-empty string."
    );
  }

  if (!artwork.img || typeof artwork.img !== "string") {
    errors.push("Invalid or missing 'imgUrl'. It must be a string.");
  }

  if (!artwork.description || typeof artwork.description !== "string") {
    errors.push("Invalid or missing 'description'. It must be a string.");
  }

  if (
    artwork.additionalImages &&
    (!Array.isArray(artwork.additionalImages) ||
      !artwork.additionalImages.every((img: string) => typeof img === "string"))
  ) {
    errors.push(
      "Invalid 'additionalImages'. It must be an array of strings if provided."
    );
  }

  if (
    !artwork.dateCreated ||
    typeof artwork.dateCreated !== "string" ||
    isNaN(Date.parse(artwork.dateCreated))
  ) {
    errors.push(
      "Invalid or missing 'dateCreated'. It must be a valid ISO 8601 date string."
    );
  }

  return {
    valid: errors.length === 0,
    errors: errors.length ? errors : undefined,
  };
}

export function convertISOToLocalDate(isoDate: string): string {
  try {
    const date = new Date(isoDate); // Parse the ISO string
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error converting ISO date:", error);
    return "Invalid date";
  }
}
