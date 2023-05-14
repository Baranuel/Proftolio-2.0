import { ObjectId } from "mongodb";

export interface ProjectDto {
  _id: {
    $oid: string;
  };
  deliverables: string[];
  description: string;
  liveDemo: string;
  overview: string;
  technologies: string[];
  title: string;
  type: string;
  color: string;
}
