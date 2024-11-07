import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, MenuItem, Tooltip, Menu, Badge, ListItemIcon } from "@material-ui/core";
import { Settings, ShoppingCart, FormatListBulleted } from "@material-ui/icons";
import Logo from "../assets/images/logo.png";
import RaffleLogo from "../assets/images/logo2.png";
import { useWallet } from "@solana/wallet-adapter-react";
import Avatar from "boring-avatars";

const Navbar = ({ cartNum, isRaffle }) => {
  const instance = useWallet();
  const { publicKey } = instance;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  let avatarString = "DEFAULT";
  if(publicKey){
    avatarString = publicKey.toString();
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="h-[60px] z-30 bg-[color:var(--card-bg)] py-2 shadow-sm shadow-black ">
      <div className="max-w-6xl p-2 px-4 md:px-2 flex m-auto justify-between items-center">
        <a href={isRaffle ? "/raffle" : "/"}>
          {/* <p className="text-lg md:text-2xl uppercase font-semibold">
            JuicyBox
          </p> */}
          <img src={isRaffle ? RaffleLogo : Logo} alt="" className={`${isRaffle ? "w-60" : "w-12"}`} />
        </a>
        {
          !isRaffle && 
            <div style={{display: "inline-flex", }} className="">
              <Tooltip title="Account Settings">
                <IconButton
                  onClick={handleClick}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar
                    size={40}
                    name={avatarString}
                    variant="beam"
                    colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                getContentAnchorEl={null}
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{horizontal: 'left', vertical: 'top'}}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Link className="flex items-center" to="/order-list">
                    <ListItemIcon>
                      <FormatListBulleted fontSize="small" />
                    </ListItemIcon>
                    Orders
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className="flex items-center" to="/setting">
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </Link>
                </MenuItem>
              </Menu>
              <MenuItem>
                  <Link className="flex items-center" to="/cart">
                    <ListItemIcon>
                      <Badge badgeContent={cartNum} color="secondary">
                        <ShoppingCart fontSize="medium" />
                        <p class="text-xl font-bold marion-font">&nbsp;Cart</p>
                      </Badge>
                    </ListItemIcon>
                  </Link>
                </MenuItem>
            </div>
        }
        {/* <button className="bg-gray-800 rounded-md p-1 md:py-2 md:px-3">
          Connect Wallet
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
