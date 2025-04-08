package com.CreditwiseApplication.CreditwiseApplication;

public interface UserService {
    User registerUser(User user);
    User loginUser(String email, String password);
}

