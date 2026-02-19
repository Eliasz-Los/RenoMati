import type {User} from "@/models/contact/User.ts";
import type {Address} from "@/models/contact/Address.ts";
import type {WorkSpecs} from "@/models/contact/WorkSpecs.ts";

export interface ContactFormData {
  personal: User;
  address: Address;
  work: WorkSpecs;
  consent: boolean
}
