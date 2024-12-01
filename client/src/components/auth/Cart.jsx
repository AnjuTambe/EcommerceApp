import React from "react";
import { List, ListItem, ListItemText, Button } from "@mui/material";

const Cart = ({ cartItems, removeFromCart }) => {
    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <List>
                    {cartItems.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={item.title}
                                secondary={item.author}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => removeFromCart(item.id)} // Remove item from cart
                            >
                                Remove
                            </Button>
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Cart;
