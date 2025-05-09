import { widgetsResponse } from "utils/config/api-response";
import { getSettings } from "utils/config/config";
import { readIdentitySettings } from "utils/identity/identity-helpers";

export default async function handler(req, res) {
  const { provider } = readIdentitySettings(getSettings().identity);
  res.send(await widgetsResponse(provider.getIdentity(req)));
}
