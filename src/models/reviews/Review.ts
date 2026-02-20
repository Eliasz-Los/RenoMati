import type {PlatformType} from "@/models/reviews/PlatformType.ts";
import type {ReviewContent} from "@/models/reviews/ReviewContent.ts";

export interface Review {
  platform: PlatformType;
  rating: number;
  title: string;
  author: string;
  dataOfReview: Date;
  reviewContent?: ReviewContent;
}
