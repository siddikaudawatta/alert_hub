if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/user/.gradle/caches/8.13/transforms/9fdefd960839cbeca57c3efa60a44040/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/user/.gradle/caches/8.13/transforms/9fdefd960839cbeca57c3efa60a44040/transformed/hermes-android-0.76.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

