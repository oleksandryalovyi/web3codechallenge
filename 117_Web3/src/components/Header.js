import { useState, useEffect } from "react";
import {
  WalletMultiButton as MaterialUIWalletMultiButton,
} from "@solana/wallet-adapter-material-ui";

const Header = ({ isRaffle }) => {
  return (
    <div className="mt-10 mb-4 px-4">
      <div className="flex float-right flex-wrap justify-between">
        <div>
          <div>
            <MaterialUIWalletMultiButton
              variant="text"
              style={{
                backgroundColor: "#1F2937",
                color: "#FFFFFF",
                padding: "8px 10px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
