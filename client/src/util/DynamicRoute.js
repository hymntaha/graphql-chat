import React from 'react';

import {useAuthState} from "../context/auth";

export default function DynamicRoute(props) {
  const {user} = useAuthState()


};
