import React from "react";
import { Button, Spinner } from "react-bootstrap";

function  ButtonLoading({
	variant= "primary",
	type="submit",
	loading,
	children,
}) {
  return(
		<Button type={type} variant={variant} disabled={loading}>
			{loading && <Spinner animation="border" size="sm"/>}
			{children}
		</Button>
    );
}

export default ButtonLoading;