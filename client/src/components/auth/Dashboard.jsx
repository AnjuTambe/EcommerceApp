import React, { useState } from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    TextField,
    Box,
} from "@mui/material";

const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        author: "@bkristastucchio",
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
        author: "@rollelflex_graphy726",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
        author: "@helloimnik",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        author: "@nolanissac",
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        author: "@hjrc33",
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
        author: "@tjdragotta",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
        author: "@katie_wasserman",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
        author: "@silverdalex",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
        author: "@shelleypauls",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
        author: "@peterlaster",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        author: "@southside_customs",
    },
];

export const Dashboard = ({ isLoggedIn , addTocart }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle Search Input
    const handleSearch = (event) => {
        setSearchTerm(event.target.value); // Update search term
    };

    // Filter Items Based on Search
    const filteredItems = itemData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isLoggedIn) {
        return (
            <Typography variant="h6" align="center">
                Please log in to access the dashboard.
            </Typography>
        );
    }

    return (
        <Box sx={{ padding: 3 }}>
            {/* Search Bar */}
            <Box sx={{ marginBottom: 3, textAlign: "center" }}>
                <TextField
                    label="Search Items"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearch}
                    sx={{ maxWidth: 600, margin: "0 auto" }}
                />
            </Box>

            {/* Grid of Items */}
            <Grid container spacing={3}>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={item.img}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.author}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="small"
                                        variant="contained" onClick={() => addTocart(item)}
                                        color="primary"
                                        fullWidth
                                    >
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography
                        variant="h6"
                        sx={{ textAlign: "center", width: "100%" }}
                    >
                        No items found
                    </Typography>
                )}
            </Grid>
        </Box>
    );
};
