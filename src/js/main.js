// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import Alert from "bootstrap/js/dist/alert";

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from "bootstrap";
import { getListings } from "./listings.mjs";
import { listAPost } from "./aList";
import{logoutUser} from "./logout.js";
import { getProfile,profileData } from "./profile.js";

import { updateAvatar } from "./profile";





