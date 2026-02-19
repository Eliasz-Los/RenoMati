import type {User} from "@/models/User.ts";
import type {Address} from "@/models/Address.ts";
import type {WorkSpecs} from "@/models/WorkSpecs.ts";

export interface ContactFormData {
  personal: User;
  address: Address;
  work: WorkSpecs;
  consent: boolean
}
