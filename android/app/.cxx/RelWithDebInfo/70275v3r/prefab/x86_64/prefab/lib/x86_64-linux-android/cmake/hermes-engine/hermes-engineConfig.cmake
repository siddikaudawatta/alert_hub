if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/user/.gradle/caches/8.10.2/transforms/9e3455826e0cd82cface4784a304fc8d/transformed/hermes-android-0.76.1-release/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/user/.gradle/caches/8.10.2/transforms/9e3455826e0cd82cface4784a304fc8d/transformed/hermes-android-0.76.1-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

